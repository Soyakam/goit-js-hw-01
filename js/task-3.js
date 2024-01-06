function getElementWidth(content, padding, border) {

  const contentWidth = parseInt(content);
  const paddingWidth = parseInt(padding);
  const borderWidth = parseInt(border);

const totalWidth = contentWidth + paddingWidth + borderWidth;
 return totalWidth;
     }  