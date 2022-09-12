import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../../src/components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      defaultValue: 'default',
      options: ['default', 'primary', 'secondary', 'tertiary', 'danger1', 'danger2'],
      control: { type: 'radio' }
    },
    size: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    variant: {
      defaultValue: 'contained',
      options: ['contained', 'outlined'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Button>;

// const wrapperStyle = css({
//   '&.root': {
//     borderRadius: 16,
//     border: '1xp solid #000000',
//     cursor: 'pointer',
//   }
// });

export const BasicButton: ComponentStory<typeof Button> = (args) => {
  const { variant, size, color } = args;
  return (
    <Button variant={variant} size={size} color={color}>BasicButto</Button>
  );
};
