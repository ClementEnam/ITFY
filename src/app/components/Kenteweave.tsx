// A kente-inspired weave drawn as a grid of "pixels".
// Blocks alternate between horizontal (warp) and vertical (weft) stripes,
// the way kente strips alternate patterns. With `animate`, the squares
// weave in diagonally once on page load.

type KenteWeaveProps = {
  cols: number;
  rows: number;
  animate?: boolean;
  className?: string;
  gapClassName?: string;
};

const BLOCK = 4; // cells per block
const WARP = ["bg-gold", "bg-kente-green", "bg-gold", "bg-kente-red"]; // stripes across
const WEFT = ["bg-ink", "bg-gold", "bg-ink", "bg-kente-green"]; // stripes down

function cellColor(row: number, col: number) {
  const blockRow = Math.floor(row / BLOCK);
  const blockCol = Math.floor(col / BLOCK);
  return (blockRow + blockCol) % 2 === 0 ? WARP[row % BLOCK] : WEFT[col % BLOCK];
}

export default function KenteWeave({
  cols,
  rows,
  animate = false,
  className = "",
  gapClassName = "gap-[3px]",
}: KenteWeaveProps) {
  return (
    <div
      aria-hidden="true"
      className={`grid ${gapClassName} ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: rows * cols }, (_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        return (
          <span
            key={i}
            className={`aspect-square rounded-[2px] ${cellColor(row, col)} ${
              animate ? "animate-weave motion-reduce:animate-none" : ""
            }`}
            style={animate ? { animationDelay: `${(row + col) * 35}ms` } : undefined}
          />
        );
      })}
    </div>
  );
}
