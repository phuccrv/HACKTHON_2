const productList = [
    {
      name: "Tùng",
      gender: "nam",
      id: "1",
    },
  
    {
      name: "Tú",
      gender: "nam",
      id: "2",
    },
    {
      name: "Nhàn",
      gender: "nữ",
      id: "3",
    },
  ];
  
  renderProduct(productList);
  
  // Function có nhiệm vụ là render lại sản phẩm
  
  function renderProduct(data) {
    // B1. Lấy element cần thay đổi
    const tbody = document.querySelector("tbody");
  
    // B2. Khai báo 1 content để chứa nội dung thay đổi
  
    let contentTbody = "";
  
    data.forEach((product, index) => {
      contentTbody += `
         <tr>
              <td>${index + 1}</td>
              <td>${product.name}</td>
              <td>${product.gender}</td>
              <td><button onclick="handleEdit('${product.id}')">Edit</button>
              <button onclick=""handleDel('${product.id}')>Delete</button>
              </td>
            </tr>`;
    });
    tbody.innerHTML = contentTbody;
  }
  
  function handleAdd() {
    const valueIdAdd = document.querySelector("#id-product").value;
    const valueNameAdd = document.querySelector("#product-name").value;
    const valueGenderAdd = document.querySelector("#gender").value;
  
    let isDulicate = false;
  
    productList.forEach((product) => {
      if (product.id === valueIdAdd) {
        isDulicate = true;
        //   Kết thúc vòng lặp forEach()
        return;
      }
    });
  
    //   Kiểm tra ID được tạo có trùng với ID trong dữ liệu hay không, ID không đưọc trống
    if (isDulicate || !valueIdAdd) {
      return alert("ID trùng hoặc trống, vui lòng đặt ID mới!");
    }
    // console.log("image", valueImageUrlAdd);
    const newProduct = {
      id: valueIdAdd,
      name: valueNameAdd,
      gender: valueGenderAdd,
    };
  
    //   Thêm sản phẩm vào dataBase
    productList.push(newProduct);
  
    //   render lại sản phẩm sau khi dataBase được update
    renderProduct(productList);
  }
  
  function handleEdit(id) {
    console.log("kiểm tra id", id);
    let productEdit;
  
    productList.forEach((product) => {
      if (product.id === id) {
        productEdit = product;
        return;
      }
    });
  
    //   Lấy được element từng edit
  
    const elementIdEdit = document.querySelector("#id-product-edit");
    const elementNameEdit = document.querySelector("#product-name-edit");
    const elementGenderEdit = document.querySelector("#gender-edit");
  
    //   Gán lại các giá trị trong form edit
    elementIdEdit.value = productEdit.id;
    //   elementImageUrlEdit.value = productEdit.imageUrl;
    elementNameEdit.value = productEdit.name;
    elementGenderEdit.value = productEdit.gender;
  }
  function handleDel(id) {
    // console.log(index);
    productList.forEach((e, index) => {
      if (e.id === id) {
        productList.splice(index, 1);
      }
    });
    renderdata(productList);

  }