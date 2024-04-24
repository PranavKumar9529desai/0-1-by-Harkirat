import './ProfileCard.css' ;
import  ProfileImage from './profileImage.jpeg/' ;

export function Profile(){
    return <div className='upc'>
         <div className='gradient' ></div>
           <div className='profile-down'>
              <img src={ProfileImage} alt=''></img>
                <div className='profile-title'>Pranav Desai</div>
                  <div className='profile-description'>
                    Hey  i am web developer and i know the languages like html css and  js . 

                   </div>
          
              <div className='profile-button'><a href='mailto:dpranav7745@gmail.com'>Contact Me</a></div>
          </div>
</div>
    
    
} 