import '../src/styles/scss.scss'
import '../src/styles/tailwind.css'
import { themes } from '@storybook/theming'
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark
    },
    backgrounds: {
      default: "default",
      values: [
        {
          name: "default",
          value: "rgb(13, 5, 30)"
        }
      ]
    }
  },
};

export default preview;
