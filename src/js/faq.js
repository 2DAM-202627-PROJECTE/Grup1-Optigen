export function initFaq() {
  if (typeof Element.prototype.animate !== 'function') return;

  const questions = [...document.querySelectorAll('details[name="faq"]')];
  if (!questions.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const items = questions.map((details) => ({
    details,
    answer: details.querySelector('.faq-answer'),
    expanded: details.open,
    animation: null,
  }));

  function setExpanded(item, expanded) {
    const { details, answer } = item;
    const startHeight = details.open ? answer.getBoundingClientRect().height : 0;
    item.animation?.cancel();
    item.animation = null;
    item.expanded = expanded;

    if (reducedMotion.matches) {
      details.open = expanded;
      answer.style.removeProperty('overflow');
      return;
    }

    details.open = true;
    const endHeight = expanded ? answer.getBoundingClientRect().height : 0;
    answer.style.overflow = 'hidden';

    const animation = answer.animate(
      [{ height: `${startHeight}px` }, { height: `${endHeight}px` }],
      { duration: 320, easing: 'ease-in-out', fill: 'both' },
    );
    item.animation = animation;

    animation.onfinish = () => {
      if (item.animation !== animation) return;
      details.open = expanded;
      animation.cancel();
      answer.style.removeProperty('overflow');
      item.animation = null;
    };
  }

  for (const item of items) {
    // Close the previous answer through the animation instead of the native group.
    item.details.removeAttribute('name');
    item.details.querySelector('summary').addEventListener('click', (event) => {
      event.preventDefault();
      if (!item.expanded) {
        for (const other of items) {
          if (other.expanded) setExpanded(other, false);
        }
        setExpanded(item, true);
      } else {
        setExpanded(item, false);
      }
    });
  }
}
