import React from "react";
import SignaturePad from "signature_pad";

type Props = {
  label: string;
  onChange?: (dataUrl: string | null) => void;
};

export default function SignaturePadField({ label, onChange }: Props) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const padRef = React.useRef<SignaturePad | null>(null);

  // Resize canvas to look crisp on retina screens
  const resizeCanvas = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const rect = canvas.getBoundingClientRect();

    canvas.width = Math.floor(rect.width * ratio);
    canvas.height = Math.floor(rect.height * ratio);

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(ratio, ratio);

    // If pad exists, keep it working after resize
    const pad = padRef.current;
    if (pad) pad.clear();
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize
    padRef.current = new SignaturePad(canvas, {
      minWidth: 0.8,
      maxWidth: 2.2,
      penColor: "#000",
    });

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const pad = padRef.current;

    const handleEnd = () => {
      if (!pad) return;
      if (pad.isEmpty()) onChange?.(null);
      else onChange?.(pad.toDataURL("image/png"));
    };

    // SignaturePad fires these hooks internally; we can tap into pointerup via canvas
    canvas.addEventListener("pointerup", handleEnd);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("pointerup", handleEnd);
      pad?.off();
    };
  }, [onChange, resizeCanvas]);

  const clear = () => {
    padRef.current?.clear();
    onChange?.(null);
  };

  return (
    <div className="sigField">
      <div className="lineFieldLabel">{label}</div>

      <div className="sigWrap">
        <canvas className="sigCanvas" ref={canvasRef} />
        <button className="sigClear" type="button" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
}