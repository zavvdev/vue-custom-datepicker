/**
 * @param {number} start
 * @param {number} stop
 * @param {number} step
 * @returns {Array<number>}
 */
export function range(start, stop, step = 1) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, index) => start + index * step,
  );
}
