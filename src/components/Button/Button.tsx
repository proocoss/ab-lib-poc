import {forwardRef, ComponentPropsWithRef, CSSProperties} from 'react';
import styled  from '@emotion/styled';
import isPropValid from "@emotion/is-prop-valid";
import { targetTheme, hexToRGB } from "../../utils";

type colorProp = 'default' | 'primary' | 'secondary' | 'tertiary' | 'danger1' | 'danger2';
type sizeProp = 'small' | 'medium' | 'large';
type variantProp = 'contained' | 'outlined';

type colorStyle = {
  [key in colorProp]: CSSProperties
};
type sizeStyle = {
  [key in sizeProp]: CSSProperties
};
type variantStyle = {
  [key in variantProp]: CSSProperties
};

const ButtonElement = styled('button', {
  shouldForwardProp: (prop) => {
    return isPropValid(prop) && prop !== 'color';
  }
})<ButtonElementProps>(
  (props) => {
    const { colors, fontSizes, space, radii, sizes } = targetTheme(props.theme);
    const { color = 'default', size = 'medium', variant = 'contained' } = props;
    const colorStyle: colorStyle = {
      default: {
        color: colors.blue3
      },
      primary: {
        color: colors.gray1
      },
      secondary: {
        color: colors.white1
      },
      tertiary: {
        color: colors.gray1
      },
      danger1: {
        color: colors.white1
      },
      danger2: {
        color: colors.red3
      }
    };

    const sizeStyle: sizeStyle = {
      small: {
        fontSize: fontSizes["1"],
        paddingLeft: space["1"],
        paddingRight: space["1"],
        minHeight: sizes["4"],
      },
      medium: {
        fontSize: fontSizes["2"],
        paddingLeft: space["2"],
        paddingRight: space["2"],
        minHeight: sizes["5"],
      },
      large: {
        fontSize: fontSizes["3"],
        paddingLeft: space["3"],
        paddingRight: space["3"],
        minHeight: sizes["6"],
      }
    };

    const variantStyle: variantStyle = {
      contained: {
        ...(color === 'default' && ({
          backgroundColor: colors.blue1,
          '&:hover': {
            backgroundColor: colors.blue2
          }
        })),
        ...(color === 'primary' && ({
          backgroundColor: colors.yellow1,
          '&:hover': {
            backgroundColor: colors.yellow2
          }
        })),
        ...(color === 'secondary' && ({
          backgroundColor: colors.gray1,
          '&:hover': {
            backgroundColor: colors.black1
          }
        })),
        ...(color === 'tertiary' && ({
          backgroundColor: hexToRGB(colors.gray1, 0.1),
          '&:hover': {
            backgroundColor: hexToRGB(colors.gray2, 0.6)
          }
        })),
        ...(color === 'danger1' && ({
          backgroundColor: colors.red3,
          '&:hover': {
            backgroundColor: colors.red4
          }
        })),
        ...(color === 'danger2' && ({
          backgroundColor: colors.red1,
          '&:hover': {
            backgroundColor: colors.red2
          }
        }))
      },
      outlined: {
        backgroundColor: 'transparent',
        ...(size === 'small' && ({ paddingLeft: space["1"] - 1, paddingRight: space["1"] - 1 })),
        ...(size === 'medium' && ({ paddingLeft: space["2"] - 1, paddingRight: space["2"] - 1 })),
        ...(size === 'large' && ({ paddingLeft: space["3"] - 1, paddingRight: space["3"] - 1 })),
        ...(color === 'default' && ({border: '1px solid currentColor'})),
        ...(color === 'primary' && ({ border: `1px solid ${colors.yellow1}`, color: colors.yellow1 })),
        ...(color === 'secondary' && ({ border: `1px solid ${colors.gray1}`, color: colors.gray1 })),
        ...(color === 'tertiary' && ({ border: `1px solid ${hexToRGB(colors.gray1, 0.1)}` })),
        ...(color === 'danger1' && ({ border: `1px solid ${colors.red3}`, color: colors.red3 })),
        ...(color === 'danger2' && ({ border: `1px solid ${colors.red1}`, color: colors.red1 }))
      }
    }

    return {
      borderRadius: radii["1"],
      border: 'none',
      cursor: 'pointer',
      ...colorStyle[color],
      ...sizeStyle[size],
      ...variantStyle[variant]
    }
  }
  );

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { className = '', children, ...rest } = props;
  const mergeClass = className ? `root ${className}` : 'root';

  return <ButtonElement className={mergeClass} ref={ref} { ...rest } >{children}</ButtonElement>
});

export default Button;

export interface ButtonProps extends ComponentPropsWithRef<'button'>{
  color?: colorProp;
  size?: sizeProp;
  variant?: variantProp;
};
export type ButtonElementProps = Omit<ButtonProps, 'children'>;

Button.defaultProps = {
  color: 'default',
  size: 'medium',
  variant: 'contained'
};
