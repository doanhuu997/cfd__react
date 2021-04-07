import React, { useRef, useState } from 'react';


export default React.forwardRef(function Contact(props, ref) {
    let [form, setForm] = useState({
        name: '',
        phone: '',
        mail: '',
        website: '',
        title: '',
        content: ''
    })
    let [error, setError] = useState({
        name: '',
        phone: '',
        mail: '',
        website: '',
        title: '',
        content: ''
    })
    function inputChang(e) {
        let name = e.target.name;
        let value = e.target.value;
        setForm({
            ...form,
            [name]: value
        })
       
    }
    function _btnRegistration(e) {
        let errorObj = {};
        if (!form.name) {
            errorObj.name = "Họ tên không thể để trống"
        } else if (form.name.length < 6) {
            errorObj.name = "Họ tên ít nhất 6 kí tự"
        }
        if (!form.phone) {
            errorObj.phone = "Số điện thoại không thể để trống"
        } else if (form.phone.length < 10) {
            errorObj.phone="Số điện thoại không đúng định dạng "
        }
        if (!form.mail) {
            errorObj.mail = "Email không thể để trống"
        } else if( !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(form.mail))
        {
            errorObj.mail="Email không đúng định dạng"
        }
        if (!form.title) {
            errorObj.title = "Title không thể để trống"
        }
        if (!form.content) {
            errorObj.content = "Nội dung tên không thể để trống"
        }
        setError(errorObj);
        if(Object.keys(errorObj).length === 0)
        {
            alert('Thành công')
        }
        
    }

    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
            việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
          </p>

                <div className="form">
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <input value={form.name} onChange={inputChang} type="text" placeholder="Họ và tên bạn" name="name" />
                        {error.name ? <p className="error_form"> {error.name} </p> : null}
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        <input value={form.phone} onChange={inputChang} type="text" placeholder="Số điện thoại" name="phone" />
                        {error.phone ? <p className="error_form"> {error.phone} </p> : null}
                    </label>
                    <label>
                        <p>Email<span>*</span></p>
                        <input value={form.mail} onChange={inputChang} type="text" placeholder="Email của bạn" name="mail" />
                        {error.mail ? <p className="error_form"> {error.mail} </p> : null}
                    </label>
                    <label>
                        <p>Website</p>
                        <input value={form.website} onChange={inputChang} type="text" placeholder="Đường dẫn website http://" name="slug" />
                        {error.website ? <p className="error_form"> {error.website} </p> : null}
                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <input value={form.title} onChange={inputChang} type="text" placeholder="Tiêu đề liên hệ" name="title" />
                        {error.title ? <p className="error_form"> {error.title} </p> : null}
                    </label>
                    <label>
                        <p>Nội dung<span>*</span></p>
                        <textarea value={form.content} onChange={inputChang} name="content" id cols={30} rows={10} defaultValue={""} />
                        {error.content ? <p className="error_form"> {error.content} </p> : null}
                    </label>
                    <div className="btn main rect" onClick={_btnRegistration}>đăng ký</div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    );
}

)