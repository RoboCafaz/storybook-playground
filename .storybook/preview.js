export const globalTypes = {
  fontFamily: {
    name: 'Font',
    description: 'Font Family',
    defaultValue: '',
    toolbar: {
      icon: 'paragraph',
      items: [
        { value: '', title: 'None' },
        { value: "'Courier New', monospace", title: 'Courier' },
        { value: "'Times New Roman', serif", title: 'Times New Roman' },
        { value: 'Arial, sans-serif', title: 'Arial' },
        { value: "'Brush Script MT', cursive", title: 'Brush Script' }
      ]
    }
  }
};

const withFont = (Story, context) => {
  const storyElement = <Story {...context} />;
  if (context.globals.fontFamily) {
    return <div style={{ fontFamily: context.globals.fontFamily }}>{storyElement}</div>;
  }
  return storyElement;
};

export const decorators = [withFont];
