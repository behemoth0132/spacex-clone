const mongoose = require('mongoose');


const dragonsSchema = new mongoose.Schema({
        name: String,

        type: String,
        
        active: Boolean,
       
        crew_capacity: Number,
         
        
        sidewall_angle_deg: Number,
         
       
        orbit_duration_yr:  Number,
          
      
        dry_mass_kg:  Number,
         
        
        dry_mass_lb:  Number,
          
       
        first_flight: String,
        
        
        heat_shield: String,
        
         
          size_meters: Number,
           
       
          temp_degrees:  Number,
         
          dev_partner: String,
         
       
        thrusters:  Object,
      
        launch_payload_mass: Number,
          
          lb: Number,
         
        launch_payload_vol: Number,
         
          cubic_feet:  Number,
        
        
        return_payload_mass: Number,
          
          lb: Number,
          
        
        return_payload_vol: Number,
         
          cubic_feet: Number,
         
       
        pressurized_capsule:Number,
          
            cubic_feet: Number,
         
        trunk: Number,
           
            cubic_feet: Number,
        
          cargo:Number,
           
            unpressurized_cargo: Boolean,
          
        height_w_trunk: Number,
         
          feet: Number,
         
        
        diameter:Number,
         
          feet: Number,
        
        wikipedia:String,
       
        description: String,
       
     
})



dragonsSchema.methods.intro = function() {
    console.log(`The dragons name is ${this.name}`);
}

const Dragons = mongoose.model('Dragons', dragonsSchema);

module.exports = Dragons;