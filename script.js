
class Comment {
    constructor(obj) {
        this.renderComment(obj);
    }

  /** 
   * renders HTML to DOM
   * @param comments array of comments.
   * */
    renderComment(comments = {}) {
        comments.values.forEach(comment => {
            document.getElementById('comment-box').innerHTML += this.generateCommentHTML(comment);
        });
    }

  /** 
   * Generates comment html 
   * @param comment its a comment object.
   * @returns string
   * */
    generateCommentHTML(comment) {
        let children = comment.children.map(msg => `<div class="comment">
        <div class="arrow-left"></div>
        <div class="comment-holder">${msg}</div>
    </div>`).join('');
        return `  <div class="container" id="comment-template">
        <div class="main-content">
        ${comment.main}
        </div>
            <div class="comment-child-line"></div>
           ${children}
      </div>
      <textarea name="" id="" rows="5" class="add-comment"></textarea>
      <input type="button" value="Submit" class="button" data-button="true"/>
      `
    }
}

//  TODO: Move it to another file, and cleanup things
document.getElementById('comment-box').addEventListener('click', (e) => {
    if (e.target.dataset.button === 'true') {
        const text = e.target.previousElementSibling.value;
        e.target.previousElementSibling.value = '';
        e.target.previousElementSibling.previousElementSibling.innerHTML += `<div class="comment">
        <div class="arrow-left"></div>
        <div class="comment-holder">${text}</div>
    </div>`

    }
});
