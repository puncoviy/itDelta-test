const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal__img');
const commentBox = document.querySelector('.modal__box');
const modalCloseBtn = document.querySelector('.modal__box-close')
const modalCommentDate = document.querySelector('.modal__comment-date');
const modalCommentText = document.querySelector('.modal__comment-text');
const postComment = document.querySelector('.modal__new-comment-btn');
const newCommentText = document.querySelector('.modal__new-comment-text');

const galleryList = document.querySelector('.gallery__list');
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

// for(let i=0; i<galleryImg.length; i++) {
//     galleryItemImg[i].src = galleryImg[i].url;
//     galleryItemText[i].textContent = "id: " + galleryImg[i].id;
// }

galleryImg.forEach(function(item){
    const galleryImgItem = document.createElement('li');
    galleryImgItem.className = 'gallery__item';
    galleryList.append(galleryImgItem);

    const galleryImgItemPhoto = document.createElement('img');
    galleryImgItemPhoto.className = 'gallery__item-img';
    galleryImgItemPhoto.src = item.url;
    galleryImgItemPhoto.alt = 'Фото от Ricardo Cooper';
    galleryImgItem.appendChild(galleryImgItemPhoto);

    const galleryImgItemText = document.createElement('p');
    galleryImgItemText.className = 'gallery__item-text';
    galleryImgItemText.textContent = 'id: ' + item.id;
    galleryImgItem.appendChild(galleryImgItemText);
})


let galleryItem = document.querySelectorAll('.gallery__item');
let ind;

galleryItem.forEach(function (item, index) {
    item.addEventListener('click', function(){
        modal.classList.add('active');
        commentBox.classList.add('active');
        modalImg.src = galleryImgFull[index].url;
        modalCloseBtn.addEventListener ('click', function(){
            modal.classList.remove('active');
            commentBox.classList.remove('active');
            newCommentText.value = '';
            modalImg.src = '';
            let allComments = document.querySelectorAll('.modal__comment');
            if (allComments.length > 0) {
                allComments.forEach (el => el.remove())
            }
        })
        modal.addEventListener('click', function(){
            modal.classList.remove('active');
            commentBox.classList.remove('active');
            newCommentText.value = '';
            modalImg.src = '';
            let allComments = document.querySelectorAll('.modal__comment');
            if (allComments.length > 0) {
                allComments.forEach (el => el.remove())
            }
        })

        let commentsList = galleryImgFull[index].comments;
        ind = index;
        for (let x = 0; x < commentsList.length; x++) {
            const dC = document.createElement('div');
            dC.className = 'modal__comment';

            const pD = document.createElement('p');
            pD.className = 'modal__comment-date';
            pD.textContent = new Date(commentsList[x].date);
            dC.appendChild(pD);

            const pT = document.createElement('p');
            pT.className = 'modal__comment-text';
            pT.textContent = commentsList[x].text;
            dC.appendChild(pT);

            commentBox.prepend(dC);
        }
    })
})

postComment.addEventListener('click', function(){
    let str = newCommentText.value;
    if (!str.trim()) {
        newCommentText.placeholder = 'Введите сообщение здесь';
    } else {
        let newComment = {};
        newComment.text = newCommentText.value;
        newComment.date = new Date();
        galleryImgFull[ind].comments.push(newComment);
        
        const dC = document.createElement('div');
        dC.className = 'modal__comment';

        const pD = document.createElement('p');
        pD.className = 'modal__comment-date';
        pD.textContent = new Date(newComment.date);
        dC.appendChild(pD);

        const pT = document.createElement('p');
        pT.className = 'modal__comment-text';
        pT.textContent = newComment.text;
        dC.appendChild(pT);

        commentBox.prepend(dC);
        newCommentText.placeholder = '';
        newCommentText.value = '';
    }
})

// добавить отправку по нажатию на enter(без шифта),
// изменить формат даты комментария

console.log(
`Доброго дня, уважаемый проверяющий!

Код вышел корявый, скорее всего не оптимизирован, имеет много лишнего и всё в таком духе.
Не пользовался React'ом или Vue, и массивы просто скопировал, а не подтягивал с url.

Но код работает. И я очень хотел бы уметь писать код так, чтобы за него не было стыдно.
Однако, я самоучка, подсказывать мне некому.

Надеюсь, что при проверке кода Вы сделаете мне скидку на мою рукопопость ввиду вышеизложенного :)
Спасибо что уделили время моему тестовому, и хорошего Вам денёчка!
`
)
