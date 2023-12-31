import Hotel from "../../models/Hotel.js";



export const createHotel = async (req,res,next)=>{

    const newHotel = new Hotel(re.body);
    

    try { const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
        
    } catch(err) {
    next(err);
    }

}
//update
export const updateHotel = async (req,res,next)=>{
    
    try
    
    { const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set : req.body} , {new: true})
        res.status(200).json(updatedHotel)
        
    } catch(err) {
        res.status(500).json(err)
    }
    }
    ; 

//delete

export const deleteHotel = async (req,res,next)=>{
    
    

    try
        
    { 
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("hotel have been deleted")
        
    } catch(err) {
        res.status(500).json(err)
    }
    }
    ;

//get


 export const getHotel = async (req,res,next)=>{
   
    try
        
    { const hotel = await hotel.findById(req.params.id)
        res.status(200).json(hotel)
        
    } catch(err) {
        res.status(500).json(err)
    }
    }
    ; 
    

//getall
export const getHotels = async (req,res,next)=>{

    
    try
         
    {
            
            const hotels = await hotels.find();
            res.status(200).json(hotels);
            
        } catch (err) {
         next(err)
        }
        }        
        ; 