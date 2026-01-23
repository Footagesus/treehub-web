import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

function isGradient(v: any): v is {
    gradient: { pos: string; hex: string }[];
    rotation?: number;
} {
    return v && typeof v === "object" && Array.isArray(v.gradient);
}

function ColorPreview({ value }: { value: any }) {
    const style: React.CSSProperties = {};
    let displayText = "";
    let textColor = "#000000";

    const getBrightness = (hex: string): number => {
        const rgb = parseInt(hex.slice(1), 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = (rgb >> 0) & 0xff;
        return (r * 299 + g * 587 + b * 114) / 1000;
    };

    if (typeof value === "string") {
        style.backgroundColor = value;
        displayText = value;
        textColor = getBrightness(value) < 128 ? "#ffffff" : "#000000";
    } else if (isGradient(value) && value.gradient.length) {
        const angle = value.rotation ?? 0;
        const stops = value.gradient
            .sort((a, b) => Number(a.pos) - Number(b.pos))
            .map((s) => `${s.hex} ${s.pos}%`)
            .join(", ");

        style.backgroundImage = `linear-gradient(${angle}deg, ${stops})`;
        displayText = value.gradient.map((s) => s.hex).join(", ");

        const avgBrightness =
            value.gradient.reduce((sum, s) => sum + getBrightness(s.hex), 0) /
            value.gradient.length;
        textColor = avgBrightness < 128 ? "#ffffff" : "#000000";
    }

    return (
        <div className="flex items-center gap-2">
            <span
                className="w-18 h-8 rounded-full justify-center items-center flex dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)] flex-shrink-0"
                style={style}
            >
                <span
                    className="text-xs font-mono font-semibold"
                    style={{ color: textColor }}
                >
                    {displayText}
                </span>
            </span>
        </div>
    );
}

export function ThemeSwatch({ theme }: { theme: any }) {
    const bgValue = theme?.Accent;
    const textValue = theme?.Text;
    const label = theme?.Name ?? "Theme";

    const boxStyle: React.CSSProperties = {};
    const textStyle: React.CSSProperties = {};

    if (typeof bgValue === "string") {
        boxStyle.backgroundColor = bgValue;
    } else if (isGradient(bgValue)) {
        const angle = bgValue.rotation ?? 0;
        const stops = bgValue.gradient
            .sort((a, b) => Number(a.pos) - Number(b.pos))
            .map((s) => `${s.hex} ${s.pos}%`)
            .join(", ");

        boxStyle.backgroundImage = `linear-gradient(${angle}deg, ${stops})`;
    }

    if (typeof textValue === "string") {
        textStyle.color = textValue;
    } else if (isGradient(textValue)) {
        const angle = textValue.rotation ?? 0;
        const stops = textValue.gradient
            .sort((a, b) => Number(a.pos) - Number(b.pos))
            .map((s) => `${s.hex} ${s.pos}%`)
            .join(", ");

        textStyle.backgroundImage = `linear-gradient(${angle}deg, ${stops})`;
        textStyle.backgroundClip = "text";
        (textStyle as any).WebkitBackgroundClip = "text";
        (textStyle as any).WebkitTextFillColor = "transparent";
        textStyle.display = "inline-block";
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <span
                    style={{ ...boxStyle, backgroundClip: "padding-box" }}
                    className="
                        inline-flex items-center justify-center
                        w-full h-10 rounded-[20px]
                        cursor-pointer
                        dark:shadow-[inset_0_0_0_0.75px_rgba(255,255,255,0.12)]
                        shadow-[inset_0_0_0_0.75px_rgba(0,0,0,0.12)]
                        select-none
                    "
                >
                    <span
                        className="text-sm font-medium inline-block"
                        style={textStyle}
                    >
                        {label}
                    </span>
                </span>
            </PopoverTrigger>

            <PopoverContent className="w-80 p-3 rounded-[20px] dark:border-0 border border-black/10 shadow-none dark:bg-secondary/80 backdrop-blur-2xl bg-neutral-100">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between px-0.5 pb-1">
                        <span className="text-md font-semibold">{label}</span>
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <Eye className="w-4 h-4" />
                                </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl p-6 border-0 bg-transparent shadow-none">
                                <img
                                    src={`/windui/themes/${label}.png`}
                                    alt={label}
                                    className="w-full h-auto rounded-lg"
                                />
                            </DialogContent>
                        </Dialog>
                    </div>
                    {Object.entries(theme)
                        .filter(([key, value]) => {
                            if (key === "Name") return false;
                            if (typeof value === "number") return false;
                            if (typeof value === "string") return true;
                            if (isGradient(value)) return true;
                            return false;
                        })
                        .map(([key, value]) => (
                            <div key={key} className="flex items-center gap-3">
                                <ColorPreview value={value} />
                                <span className="text-sm text-muted-foreground">
                                    {key}
                                </span>
                            </div>
                        ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}
