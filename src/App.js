import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./Components/NavBar";
import Movies from "./Components/Movies";
import { useState } from "react";
import Add from "./Components/Add";

function App() {
  const [movie, setMovie] = useState([
    {
      id: Math.random(),
      name: "Wonder Women",
      rating: 3,
      date: "2021",
      image:
        "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/p180x540/87038889_636017140500251_3154953250449391616_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=uz7uWlI1BUUAX_Dl7ec&_nc_ht=scontent.ftun1-2.fna&oh=4efe516359e556045befc774c1fc855d&oe=6170C30E",
    },
    {
      id: Math.random(),
      name: "Top Gun Maverick",
      rating: 2,
      date: "2020",
      image:
        "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/p180x540/86802362_636016897166942_1608333817762807808_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=D80JkwMWVN4AX-l0QR7&_nc_ht=scontent.ftun1-2.fna&oh=67601fe57875c967ae83bb3c8b84cf7f&oe=616DCE8C",
    },
    {
      id: Math.random(),
      name: "No Time To Die",
      rating: 1,
      date: "2020",
      image:
        "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/87061584_636013653833933_9165488560743120896_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=gEbFYieZoiIAX_fSxa5&_nc_ht=scontent.ftun1-2.fna&oh=13874b23bb57c91de2d3c4ea55b2a0c6&oe=61705713",
    },
    {
      id: Math.random(),
      name: "Jumanji",
      rating: 5,
      date: "2019",
      image:
        "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/80449213_587069935394972_4265380752356540416_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=buiOK3B_H5QAX-VZ7U7&_nc_ht=scontent.ftun1-2.fna&oh=3adab86069d994e452885dbf22c4ca7e&oe=6170E6FF",
    },
    {
      id: Math.random(),
      name: "Dynasty Warriors",
      rating: 4,
      date: "2020",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/7BCTdek5LFHglcgl7shsm7igJAH.jpg",
    },
    {
      id: Math.random(),
      name: "Godzila Vs Kong",
      rating: 4,
      date: "2018",
      image:
        "https://wehco.media.clients.ellingtoncms.com/img/photos/2021/06/10/homemovies_0611_rgb_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d",
    },
    {
      id: Math.random(),
      name: "The Fast Saga",
      rating: 3,
      date: "2017",
      image:
        "https://play-lh.googleusercontent.com/e2RT4NLIcganjzLMphYegrylKmMf1H-sA-d4kVv7I1ZKo24YrobowJTiLpNFA5LlaetWZFBLkVxuQej2ebtU",
    },
  ]);
  const handelAdd = (x, y, z, t) => {
    let newAction = {
      name: x,
      rating: y,
      id: Math.random(),
      date: z,
      image: t,
    };
    setMovie([...movie, newAction]);
  };

  const [text, setText] = useState("");
  const [stars, setStars] = useState();
  let handelChange = (e) => {
    setText(e.target.value);
  };
  let handelRating = (x) => setStars(x);

  return (
    <div className="App">
      <NavBar
        text={text}
        handelChange={handelChange}
        handelRating={handelRating}
      />
      <Movies
        movie={movie}
        list={movie.filter((el) =>
          el.name
            .toLowerCase()
            .includes(text.toLowerCase() && el.rating >= stars)
        )}
      />
      <Add add={handelAdd} />
    </div>
  );
}

export default App;
