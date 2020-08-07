// This block is based on following link (See ES5 code):
// https://developer.wordpress.org/block-editor/tutorials/block-tutorial/introducing-attributes-and-editable-fields/

const el = window.wp.element.createElement;
const RichText = window.wp.editor.RichText;

const blockStyle = {
  backgroundColor: 'rgba(28,11,195,0.44)',
  color: '#fff',
  padding: '20px',
};

export default {
  title: 'My Stateful Text',
  icon: 'universal-access-alt',
  category: 'my-category',

  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'p',
    },
  },

  example: {
    attributes: {
      content: 'Hello World',
    },
  },

  edit: function( props ) {
    let content = props.attributes.content;

    function onChangeContent( newContent ) {
      props.setAttributes( { content: newContent } );
    }

    return el(
      RichText,
      {
        tagName: 'p',
        className: props.className,
        onChange: onChangeContent,
        value: content,
        style: blockStyle
      }
    );
  },

  save: function( props ) {
    return el(
      RichText.Content,
      {
        tagName: 'p',
        value: props.attributes.content,
        style: blockStyle
      }
    );
  },
}
