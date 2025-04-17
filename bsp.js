export function generateBSPRooms(width, height, depth) {
  const rooms = [];
  function split(x, y, w, h, d) {
    if (d === 0) {
      rooms.push({ x, y, width: w, height: h, label: "Room" });
      return;
    }
    const vertical = Math.random() > 0.5;
    if (vertical) {
      const splitAt = Math.floor(w * (0.3 + 0.4 * Math.random()));
      split(x, y, splitAt, h, d - 1);
      split(x + splitAt, y, w - splitAt, h, d - 1);
    } else {
      const splitAt = Math.floor(h * (0.3 + 0.4 * Math.random()));
      split(x, y, w, splitAt, d - 1);
      split(x, y + splitAt, w, h - splitAt, d - 1);
    }
  }
  split(0, 0, width, height, depth);
  return rooms;
}
