export async function getThemes(): Promise<Record<string, any>> {
    const url =
        "https://raw.githubusercontent.com/Footagesus/WindUI/refs/heads/main/src/themes/Init.lua";
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch themes");
    const txt = await res.text();

    const themeRegex =
        /([A-Za-z0-9_]+)\s*=\s*\{([^]*?)\},\s*(?=[A-Za-z0-9_]+\s*=|}\s*end|$)/g;
    const themes: Record<string, any> = {};
    let m;
    while ((m = themeRegex.exec(txt)) !== null) {
        const key = m[1];
        const body = m[2];
        const theme: Record<string, any> = {};

        const colorRegex =
            /([A-Za-z0-9_]+)\s*=\s*Color3\.fromHex\("(?<hex>#[0-9A-Fa-f]{6})"\)/g;
        let c;
        while ((c = colorRegex.exec(body)) !== null) {
            const prop = c[1];
            const hex = c.groups?.hex ?? null;
            if (hex) theme[prop] = hex.toLowerCase();
        }

        const nameMatch = body.match(/Name\s*=\s*"(.*?)"/);
        if (nameMatch) theme.Name = nameMatch[1];

        const gradRegex =
            /([A-Za-z0-9_]+)\s*=\s*WindUI:Gradient\(\s*\{([^]*?)\}\s*,\s*\{([^]*?)\}\s*\)/g;
        let g;
        while ((g = gradRegex.exec(body)) !== null) {
            const prop = g[1];
            const stopsBlock = g[2];
            const optsBlock = g[3];
            const stopRegex =
                /\["(?<pos>\d+)"\]\s*=\s*\{\s*Color\s*=\s*Color3\.fromHex\("(?<hex>#[0-9A-Fa-f]{6})"\)[^}]*\}/g;
            const stops: Array<{ pos: string; hex: string }> = [];
            let s;
            while ((s = stopRegex.exec(stopsBlock)) !== null) {
                stops.push({
                    pos: s[1],
                    hex: (s.groups?.hex ?? "").toLowerCase(),
                });
            }

            const rotMatch = optsBlock.match(/Rotation\s*=\s*([0-9]+)/);
            const rotation = rotMatch ? Number(rotMatch[1]) : undefined;

            theme[prop] = { gradient: stops, rotation };
        }

        themes[key] = theme;
    }

    return themes;
}
