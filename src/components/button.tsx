import React from 'react';

export type ButtonProps = React.PropsWithChildren<{
  fontColor?: string;
  color?: string;
  borderSize?: number;
  borderColor?: string;
  rounded?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}>;

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
