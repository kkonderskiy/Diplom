const url = 'http://localhost:4000/statements';

function submit_form(){
    let doc = document.querySelector(".form__right__content");
    if(doc.querySelector("#lastName").value != '' && doc.querySelector("#firstName").value != '' && doc.querySelector("#patronymic").value != '' && doc.querySelector("#gender").value && doc.querySelector("#age").value != '' && doc.querySelector("#contraindications").value != '' && doc.querySelector("#treatment").value !='' && doc.querySelector("#hospital").value !=''){

        const data = { 
                lastName: doc.querySelector("#lastName").value,
                firstName: doc.querySelector("#firstName").value,
                patronymic: doc.querySelector("#patronymic").value,
                gender: doc.querySelector("#gender").value,
                age: doc.querySelector("#age").value,
                contraindications: doc.querySelector("#contraindications").value,
                treatment: doc.querySelector("#treatment").value,
                hospital: doc.querySelector("#hospital").value,
            }
            console.log(doc.querySelector("#lastName").value)
            try {
            const response =  fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), 
            headers: {
            'Content-Type': 'application/json'
            }
            });
            const json =  response.json();
            console.log('Успех:', JSON.stringify(json));
            } catch (error) {
            console.log('Ошибка:', 123);
            }

            doc.addEventListener('submit', (e) => {
                
                e.preventDefault();
                e.target.reset(); 
            })

        window.location.href = '../index.html';
    }else{
        alert('проверьте введенные данные');
    }
    
}


