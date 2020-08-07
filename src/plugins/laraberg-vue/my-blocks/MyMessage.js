// This block is based on following link (See ES5 code):
// https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/

const el = window.wp.element.createElement;

const blockStyle = {
  backgroundColor: 'rgba(195,37,82,0.44)',
  color: '#fff',
  padding: '20px',
};

export default {
  title: 'My Message',
  icon: 'admin-comments',
  category: 'my-category',

  edit() {
    return el(
      'p',
      { style: blockStyle },
      'This is message shown in the editor.'
    );
  },

  save() {
    return el(
      'p',
      { style: blockStyle },
      'This is the real content that will be shown in the frontend.'
    );
  }
}
