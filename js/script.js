document.addEventListener("DOMContentLoaded", function (event) {
	// Ищем в HTML документе для дальнейшего взаимодействия область для вывода списка постов
	const result = document.querySelector(`#result`);
	result.style.width = "50rem";
	result.style.margin = "0 auto";

	function showPosts() {
		//Методом fetch отправляем GET-запрос на указанный адрес
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			// в первом обработчике then преобразовываем данные в формат JSON
			.then(response => response.json())
			// в втором обработчике then добавляем посты на страницу
			.then((data) => {
				//с помощью метода forEach перебираем элементы массива и выполняем функцию для каждого элемента массива (выводим заголовок и текст поста)
				data.forEach(item => {
					//Создаем новый элемент (тег h4) для отображения заголовка поста
					const title = document.createElement(`h4`);
					//Наполняем новый элемент контентом (значение тега h4 - заголовок поста)
					title.textContent = `Заголовок: ${item.title}`
					title.style.color = "red";
					//Вставляем новый элемент внутрь и в начало контейнера div для вывода результата
					result.appendChild(title);
					// Создаем абзац для отображения текста поста
					const text = document.createElement(`p`);
					//Наполняем новый элемент контентом (значение тега p теперь текст поста)
					text.textContent = `${item.body}`
					//Вставляем новый элемент (текст поста) после его заголовка
					title.after(text);
				})
			})
			//catch сработает, если запросы then НЕ выполнены успешно (например, отвалился интернет)
			.catch(error => console.log(`Ошибка. Запрос не выполнен`, error))
	}
	//Вызываем функцию, чтобы код сработал
	showPosts();
})