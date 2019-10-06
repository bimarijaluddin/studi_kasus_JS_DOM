function buat_login(){
	let tombol1 = document.getElementById('x');
	tombol1.parentElement.removeChild(tombol1);

	let p = document.createElement('p');
	p.className = 'tulisan_login';
	p.innerHTML = "Silahkan Login"

	let elementDiv = document.getElementsByTagName('div')[0];
	elementDiv.appendChild(p);

	let form = document.createElement('form');
	elementDiv.appendChild(form);

	let label = document.createElement('label');
	label.innerHTML = 'username : ';
	form.appendChild(label);

	let input_username = document.createElement('input');
	input_username.type = 'text';
	input_username.name = 'username';
	input_username.className = 'form_login'
	input_username.placeholder = 'masukkan username';
	form.appendChild(input_username);

	let label2 = document.createElement('label');
	label2.innerHTML = 'password : ';
	form.appendChild(label2);

	let input_password = document.createElement('input');
	input_password.type = 'password';
	input_password.name = 'password';
	input_password.className = 'form_login';
	form.appendChild(input_password);

	let tombol2 = document.createElement('input');
	tombol2.type = "submit";
	tombol2.className = 'tombol_login'
	form.appendChild(tombol2);

}