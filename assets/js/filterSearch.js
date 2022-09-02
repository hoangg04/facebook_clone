function filterFunction1() {
	let input, filter;
	input = document.getElementById("input_search");
	filter = input.value.toUpperCase();
	filter = filter.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
	filter = filter.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	filter = filter.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
	filter = filter.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	filter = filter.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
	filter = filter.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	filter = filter.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
	filter = filter.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	filter = filter.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
	filter = filter.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	filter = filter.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
	filter = filter.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	filter = filter.replace(/Đ/g, "D");
	filter = filter.replace(/đ/g, "d");
	filter = filter.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
	filter = filter.replace(/\u02C6|\u0306|\u031B/g, ""); 
	item = document.querySelectorAll(".history-list-item");
	value_1 = document.querySelectorAll(".filter-history");
	for (let i = 0; i < value_1.length; i++) {
		let txtValue = value_1[i].textContent;
		txtValue = txtValue.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
		txtValue = txtValue.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
		txtValue = txtValue.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
		txtValue = txtValue.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
		txtValue = txtValue.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
		txtValue = txtValue.replace(/ì|í|ị|ỉ|ĩ/g, "i");
		txtValue = txtValue.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
		txtValue = txtValue.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
		txtValue = txtValue.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
		txtValue = txtValue.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
		txtValue = txtValue.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
		txtValue = txtValue.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
		txtValue = txtValue.replace(/Đ/g, "D");
		txtValue = txtValue.replace(/đ/g, "d");
		txtValue = txtValue.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
		txtValue = txtValue.replace(/\u02C6|\u0306|\u031B/g, "");
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			item[i].style.display = "";
		} else {
			item[i].style.display = "none";
            
		}
	}
	
}




