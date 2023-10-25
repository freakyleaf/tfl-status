const sortLinesCore = (lines) => {
  return lines.sort((a, b) => {
    return a.id.localeCompare(b.id, 'en', {
      numeric: true,
      sensitivity: 'base',
    });
  });
};

export default sortLinesCore;
