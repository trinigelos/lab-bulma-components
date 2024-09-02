import React from 'react';

export default function CoolButton(props) {
  const bulmaClassesMap = {
    isCentered: 'is-centered',
    isActive: 'is-active',
    isBlack: 'is-black',
    isDanger: 'is-danger',
    isDark: 'is-dark',
    isFocused: 'is-focused',
    isGrouped: 'is-grouped',
    isHovered: 'is-hovered',
    isInfo: 'is-info',
    isInverted: 'is-inverted',
    isLarge: 'is-large',
    isLight: 'is-light',
    isLink: 'is-link',
    isLoading: 'is-loading',
    isMedium: 'is-medium',
    isOutlined: 'is-outlined',
    isPrimary: 'is-primary',
    isRight: 'is-right',
    isRounded: 'is-rounded',
    isSelected: 'is-selected',
    isSmall: 'is-small',
    isStatic: 'is-static',
    isSuccess: 'is-success',
    isText: 'is-text',
    isWarning: 'is-warning',
    isWhite: 'is-white'
  };

  // Start with the base "button" class
  let classNames = 'button';

  // Iterate over the props to add corresponding Bulma classes
  Object.keys(bulmaClassesMap).forEach((key) => {
    if (props[key]) {
      classNames += ` ${bulmaClassesMap[key]}`;
    }
  });

  return (
    <button className={classNames} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
