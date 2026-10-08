// Replace the files in /public/images/gallery with real photos (same filenames).
// Update width/height to the real pixel size; the layout adapts automatically.
const g = (n, width, height, category) => ({
  id: n, src: `/images/gallery/gallery-${String(n).padStart(2, "0")}.jpg`,
  alt: `Heightville Academy photograph ${n} (placeholder)`, caption: "Photo caption to be added", width, height, category,
});
export const gallery = [
  g(1, 1600, 900, "Campus"), g(2, 1200, 1600, "Student Life"), g(3, 1200, 1200, "Campus"),
  g(4, 1600, 1200, "Classroom"), g(5, 1200, 1800, "Student Life"), g(6, 1920, 800, "Campus"),
  g(7, 1200, 1200, "Facilities"), g(8, 1200, 1600, "Student Life"), g(9, 1800, 1200, "Classroom"),
  g(10, 1600, 900, "Campus"),
];
