/**
 * 采用鼠标是否移出父元素时，关闭菜单
 * @param $event 
 * @returns 
 */
export const pointIsOutside = ($event: any): boolean => {
  try {
    // 如果鼠标的移动点在指定区域，返回true，否则返回false
    let subDivLeft = $event.target.offsetLeft;
    let subDivTop = $event.target.offsetTop;
    let subDivWidth = $event.target.offsetWidth;
    let subDivHeight = $event.target.offsetHeight;
    let childWidth = $event.target.parentElement.childNodes[1].offsetWidth || 0;
    let childHeight = $event.target.parentElement.childNodes[1].offsetHeight || 0;
    let cx = $event.clientX, cy = $event.clientY, borderLeft = subDivLeft, borderRight = childWidth + subDivLeft - 30, borderTop = subDivTop, borderBottom = childHeight + subDivTop + subDivHeight;
    if (cx >= borderLeft && cx <= borderRight && cy >= borderTop && cy <= borderBottom) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

/**
 * 判断鼠标是否移出指定区域大小后，关闭
 * @param event 事件源头
 * @param specifyElement 指定要判断区域的元素
 */
export const pointerInSpecifyArea = (event: any, specifyElement: HTMLElement | null): boolean => {
  let cx = event.clientX, cy = event.clientY;
  let eleLeft = specifyElement?.offsetLeft!;
  let eleTop = specifyElement?.offsetTop!;
  let eleRight = Number(specifyElement?.offsetWidth) + 620;
  let eleBottom = Number(specifyElement?.offsetHeight) + eleTop - 20;

  if (cx >= eleLeft && cx <= eleRight && cy >= eleTop && cy <= eleBottom) {
    return true;
  }
  return false;
}