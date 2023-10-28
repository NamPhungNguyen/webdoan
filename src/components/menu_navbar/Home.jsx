import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import './home.scss'
const Home = () => {
    return (
        <div className="box_search">
            <div className="nav_search">
                <form className="search_form_order">
                    <div className="item_search_form">
                        <span>
                            <span className="icon_input_seach">
                                <AiOutlineSearch />
                            </span>
                            <input placeholder="Nhập mã đơn hàng để tra cứu..." type="text" className="text_input_search"></input>
                        </span>

                    </div>
                    <div className="item_search_form_order_btn">
                        <button type="submit" className="search_form_order_btn">
                            <span>Tra cứu đơn</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home