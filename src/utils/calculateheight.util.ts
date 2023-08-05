export function calculateBottom(height: number) {
  if (height > 800) {
    return '-72%';
  }
  if (height > 700) {
    return '-70%';
  }
  if (height > 600) {
    return '-68%';
  }
  return '-66%';
}
