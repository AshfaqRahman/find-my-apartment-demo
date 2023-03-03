import Grid from '@mui/material/Grid';
import Productcards from "./Productcards";
import styles from './Card.module.css'
import { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from 'utils/database.types';

type Apartment = Database["public"]["Tables"]["apartment"]["Row"];


// const cards = [
//     { id: 1, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { id: 2, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { id: 3, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { id: 4, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { id: 5, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { id: 6, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { id: 7, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { id: 8, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//     { id: 9, imageUrl: "https://api.lorem.space/image/house?w=150&h=150", title: "Example Title 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
// ];



export default function SearchedProduct() {
    let [cards, setCards] = useState<any[]>([])
    const supabase = useSupabaseClient<Database>();


  let getAllAppartments = async () => {
    try {
    //   let addresses = await supabase.from("address").select();
      let apartments:any = await supabase
        .from("apartment")
        .select();

        

      if (apartments.error && apartments.status !== 406) {
        console.log(apartments.error);
      }

      if (apartments.data) {
        console.log(apartments.data);
        setCards(apartments.data);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    }
  };
  useEffect(() => {
    getAllAppartments();
    // console.log(data);
  }, []);

    const width = {
        width: "100%"
    }
    return (

        <div className="row">
            {cards.map((card) => (
                <div className="col-md-12" key={card.aprt_id}>
                    <Productcards
                        imageUrl="https://api.lorem.space/image/house?w=150&h=150"
                        title={card.price}
                        description={card.description}
                    />
                </div>
            ))}
        </div>


    );
}