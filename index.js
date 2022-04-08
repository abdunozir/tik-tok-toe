const hero__list = document.querySelector('.hero__list');
      let card = document.querySelectorAll('.list');
      let modal__container = document.querySelector('.modal__container');
      let modal__context = document.querySelector('.modal__context');

      let clickedCards = [];
      let i = 0;
      let X = [];
      let Y = [];
      card.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
          let isclicked = clickedCards.some(
            (el) => el === e.currentTarget.classList[0]
          );
          if (!isclicked) {
            if (i == 0) {
              e.currentTarget.children[0].classList.add('elhover');
            } else {
              e.currentTarget.children[1].classList.add('elhover');
            }
          }
        });
        item.addEventListener('mouseout', (e) => {
          let isclicked = clickedCards.some(
            (el) => el === e.currentTarget.classList[0]
          );
          if (!isclicked) {
            if (i == 0) {
              e.currentTarget.children[0].classList.remove('elhover');
            } else {
              e.currentTarget.children[1].classList.remove('elhover');
            }
          }
        });

        // card bosilganida ishlasin
        item.addEventListener('click', (e) => {
          let isclicked = clickedCards.some(
            (el) => el === e.currentTarget.classList[0]
          );
          if (i === 0) {
            checkValue(e.currentTarget.classList[0]);
            if (!isclicked) {
              X.push(+e.currentTarget.classList[0]);
              e.currentTarget.children[0].classList.add('xelhover');
              item.id = 'qizil';
              e.currentTarget.children[0].classList.remove('elhover');
              check(X);
              i = 1;
            }
          } else {
            checkValue(e.currentTarget.classList[0]);
            if (!isclicked) {
              Y.push(+e.currentTarget.classList[0]);
              e.currentTarget.children[1].classList.add('xelhover');
              item.id = 'sariq';
              e.currentTarget.children[1].classList.remove('elhover');
              check(Y);
              i = 0;
            }
          }
        });
      });

      // oldin bosilgan yoki yo'qligini tekshir
      function checkValue(id) {
        let isclicked = clickedCards.some((el) => el === id);
        if (!isclicked) {
          clickedCards.push(id);
        }
      }

      // javobini tekshir
      let javoblar = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
      ];
      function check(val) {
        if (val.length >= 3) {
          let xYutdi = false;
          for (let i = 0; i < javoblar.length; i++) {
            const javob = javoblar[i];
            let yutdi = false;
            yutdi =
              val.includes(javob[0]) &&
              val.includes(javob[1]) &&
              val.includes(javob[2]);

            xYutdi =
              X.includes(val[0]) && X.includes(val[1]) && X.includes(val[2]);

            console.log(
              val.includes(javob[0]),
              val.includes(javob[1]),
              val.includes(javob[2])
            );
            if (yutdi) {
              if (xYutdi) {
                if (yutdi) {
                  modal__context.innerHTML = `<h1>Birinchi player yutdi</h1>`;
                  modal__container.classList.add('openmodal');
                  break;
                }
              } else {
                if (yutdi) {
                  modal__context.innerHTML = `<h1>Ikkinchi player yutdi</h1>`;
                  modal__container.classList.add('openmodal');
                  break;
                }
              }
            }
            if (clickedCards.length == 9 && !yutdi) {
              modal__context.innerHTML = `<h1>Durrang</h1>`;
              modal__container.classList.add('openmodal');
              break;
            }
          }
        }
      }

      function restart() {
        clickedCards = [];
        i = 0;
        X = [];
        Y = [];
        card.forEach((item) => {
          // item.classList.remove('qizil');
          item.id = '';
        });
        modal__container.classList.remove('openmodal');
        document
          .querySelectorAll('.xelhover')
          .forEach((item) => item.classList.remove('xelhover'));
      }