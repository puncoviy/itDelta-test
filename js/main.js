const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal__img');
const commentBox = document.querySelector('.modal__box');
const modalCommentDate = document.querySelector('.modal__comment-date');
const modalCommentText = document.querySelector('.modal__comment-text');

const galleryItem = document.querySelectorAll('.gallery__item');
const galleryItemImg = document.querySelectorAll('.gallery__item-img');
const galleryItemText = document.querySelectorAll('.gallery__item-text');
let galleryImg = [
    {"id":237,"url":"https://picsum.photos/id/237/300/200"},
    {"id":238,"url":"https://picsum.photos/id/238/300/200"},
    {"id":239,"url":"https://picsum.photos/id/239/300/200"},
    {"id":240,"url":"https://picsum.photos/id/240/300/200"},
    {"id":241,"url":"https://picsum.photos/id/241/300/200"},
    {"id":242,"url":"https://picsum.photos/id/242/300/200"}
]
let galleryImgFull = [
    {"id":237,"url":"https://picsum.photos/id/237/600/400","comments":[{"id":153,"text":"Крутая фотка","date":1578054737927}]},
    {"id":238,"url":"https://picsum.photos/id/238/600/400","comments":[]},
    {"id":239,"url":"https://picsum.photos/id/239/600/400","comments":[]},
    {"id":240,"url":"https://picsum.photos/id/240/600/400","comments":[{"id":154,"text":"Мне нравится","date":1578054737927}]},
    {"id":241,"url":"https://picsum.photos/id/241/600/400","comments":[]},
    {"id":242,"url":"https://picsum.photos/id/242/600/400","comments":[]}
]

for(let i=0; i<galleryImg.length; i++) {
    galleryItemImg[i].src = galleryImg[i].url;
    galleryItemText[i].textContent = "id: " + galleryImg[i].id;
}

galleryItem.forEach(function (item, index) {
    item.addEventListener('click', function(){
        modal.classList.add('active');

        modalImg.src = galleryImgFull[index].url;
        let commentsList = galleryImgFull[index].comments;
        // if (commentsList.length > 0) {
        for (let x = 0; x < commentsList.length; x++) {
            const dC = document.createElement('div');
            dC.className = 'modal__comment';

            const pD = document.createElement('p');
            pD.className = 'modal__comment-date';
            pD.textContent = commentsList[x].date;
            dC.appendChild(pD);

            const pT = document.createElement('p');
            pT.className = 'modal__comment-text';
            pT.textContent = commentsList[x].text;
            dC.appendChild(pT);

            commentBox.prepend(dC);
        }
        // }
        modal.addEventListener('click', function(){
            modal.classList.remove('active');
            modalImg.src = '';
            let allComments = document.querySelectorAll('.modal__comment');
            if (allComments.length > 0) {
                allComments.forEach (el => el.remove())
            }
        })
    })
})
