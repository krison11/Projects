// importing DOM
const input = document.querySelector('#input')! as HTMLInputElement;

const container = document.querySelector('.container')! as HTMLDivElement;

const btn_add_activity = document.querySelector(
  '.header-btn'
)! as HTMLButtonElement;

const sort_btn = document.querySelector('.sort-btn')! as HTMLButtonElement;
//----------------------------------------------------------------

// sort list function
const sort_list = (parent: HTMLElement, children: string) => {
  const all_children = parent.querySelectorAll(children)! as NodeList;
  const all_children_Arr = [].slice
    .call(all_children)
    .sort((a: HTMLElement, b: HTMLElement) => {
      return a.textContent > b.textContent ? 1 : -1;
    });
  all_children_Arr.forEach(child => {
    parent.append(child);
  });
};

//----------------------------------------------------------------
// main event
btn_add_activity.onclick = () => {
  if (input.value) {
    // 1) create HTML elements
    const h1 = document.createElement('h1');
    const drop_btn = document.createElement('button');
    const heading_check_btn = document.createElement('button');
    const del_btn = document.createElement('button');
    //--------------------------------------------
    const div = document.createElement('div');
    const list_input = document.createElement('input');
    const input_btn = document.createElement('button');
    const list_sort_btn = document.createElement('button');

    // 2) placeholder for the input
    list_input.placeholder = 'Add list..';

    // 3) add icons
    input_btn.innerHTML = '<i class="fas fa-plus-circle"></i>';
    drop_btn.innerHTML = '<i class="fas fa-angle-double-down"></i>';
    heading_check_btn.innerHTML = '<i class="far fa-check-circle"></i>';
    del_btn.innerHTML = '<i class="far fa-trash-alt"></>';
    list_sort_btn.textContent = 'Sort';

    // class name(for CSS)
    div.className = 'list-container ';
    list_sort_btn.className = 'list-sort-btn';

    // 4) add input value to the h1
    h1.textContent = input.value;

    // 5) clear input field
    input.value = '';

    // 6) append
    h1.append(del_btn, drop_btn);
    div.append(h1, list_input, input_btn, list_sort_btn);
    container.appendChild(div);

    // 7) event for the check button
    heading_check_btn.onclick = () => {
      drop_btn.classList.toggle('none');
      div.classList.toggle('class-div-short');
      heading_check_btn.classList.toggle('btn-color');
      h1.classList.toggle('fade');
    };

    // 8) event for the drop down button
    drop_btn.onclick = () => {
      div.classList.toggle('class-div-long');
    };
    // 9) event for the delete button
    del_btn.onclick = () => {
      div.style.display = 'none';
    };
    //10 sort event
    sort_btn.onclick = () => sort_list(container, 'div');

    //////////////////////////////////////////////////////////////////////////////
    // 11) nested event the creates a list for each activity
    input_btn.onclick = () => {
      if (list_input.value) {
        // 1) create HTML elements
        const list_p = document.createElement('p');
        const list_del_btn = document.createElement('button');
        const list_check_btn = document.createElement('button');

        // 2) add icons
        list_check_btn.innerHTML = '<i class="far fa-check-circle"></i>';
        list_del_btn.innerHTML = '<i class="far fa-trash-alt"></>';

        // 3) add the value of the inner input to the paragraph
        list_p.textContent = list_input.value;

        // 4) clear input field
        list_input.value = '';

        // 5) append
        h1.append(heading_check_btn);
        list_p.append(list_del_btn, list_check_btn);
        div.appendChild(list_p);

        // 6) event for the inner check button
        list_check_btn.onclick = () => {
          list_p.classList.toggle('text-style');
          list_check_btn.classList.toggle('btn-color');
        };
        // 7) event for the inner delete button
        list_del_btn.onclick = () => {
          list_p.style.display = 'none';
        };

        // 8) sort event
        list_sort_btn.onclick = () => sort_list(div, 'p');
      }
    };
  }
};
