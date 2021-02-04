import React from 'react';

export type ButtonProps = React.PropsWithChildren<{
  /**
   * Color of text in button
   */
  fontColor?: string;
  /**
   * Color of button
   */
  color?: string;
  /**
   * Size of button border in pixels
   */
  borderSize?: number;
  /**
   * Color of button border
   */
  borderColor?: string;
  /**
   * Whether or not to round the border
   */
  rounded?: boolean;
  /**
   * Set to true to disable
   */
  disabled?: boolean;
  /**
   * Action to perform when clicked
   */
  onClick?: () => void;
}>;

/**
 * A swagalicious button
 * 
 * @param param0 
 */
export const Button = ({
  children,
  fontColor = 'blue',
  color = 'cyan',
  borderSize = 1,
  borderColor = 'blue',
  rounded,
  disabled,
  onClick
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        padding: '6px',
        color: fontColor,
        backgroundColor: color,
        border: `${borderSize}px solid ${borderColor}`.trim(),
        borderRadius: rounded ? '16px' : undefined
      }}
    >
      {children}
    </button>
  );
};
