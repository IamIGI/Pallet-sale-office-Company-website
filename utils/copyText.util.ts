async function copy(value: string) {
  try {
    await navigator.clipboard.writeText(value);
  } catch (error) {
    console.error('Failed to copy text: ', error);
  }
}

export default {
  copy,
};
