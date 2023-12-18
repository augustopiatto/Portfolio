export function scrollToTarget(target: string) {
  const targetDiv = document.getElementById(target);

  if (targetDiv) {
    targetDiv.classList.add("highlight");

    const targetPosition = targetDiv.getBoundingClientRect().top;
    const offset = Math.max(
      0,
      (window.innerHeight - targetDiv.offsetHeight) / 4
    );
    const targetOffset = targetPosition + window.scrollY - offset;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });

    setTimeout(() => {
      targetDiv.classList.remove("highlight");
    }, 2000);
  }
}
