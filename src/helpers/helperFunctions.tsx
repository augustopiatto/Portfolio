function getAbsolutePosition(element: HTMLElement) {
  const targetPosition = element.getBoundingClientRect();

  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  const absoluteTop = targetPosition.top + scrollTop;
  const absoluteLeft = targetPosition.left + scrollLeft;

  return {
    top: absoluteTop,
    left: absoluteLeft,
  };
}

export function scrollToTarget(target: string, padding = 0) {
  const targetDiv = document.getElementById(target);

  if (targetDiv) {
    targetDiv.classList.add("highlight");

    const targetPosition = targetDiv.getBoundingClientRect().top;
    const offset = Math.max(
      0,
      (window.innerHeight - targetDiv.offsetHeight) / 4
    );
    let top = targetPosition + window.scrollY - offset;

    if (isScreenSizeSmall()) {
      const headerHeight = 80;
      const extraSpace = 8;
      top =
        getAbsolutePosition(targetDiv).top +
        padding -
        extraSpace -
        headerHeight;
    }

    window.scrollTo({
      top: top,
      behavior: "smooth",
    });

    setTimeout(() => {
      targetDiv.classList.remove("highlight");
    }, 2000);
  }
}

export function isScreenSizeSmall() {
  return window.matchMedia("(max-width: 425px)").matches;
}
