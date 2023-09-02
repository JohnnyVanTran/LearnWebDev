import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import profile from '../resources/profile2.png'
import '../styles/About.css';



export default function Contact() {

  return (
    <div>
        <img src={profile}/>
        <div>
            <p>Kontakt meg gjerne om det er ønsket med en uforpliktende prat over en kopp kaffe eller lunsj!</p>
        </div>
        <Button variant="outlined" href='https://github.com/JohnnyVanTran' startIcon={<GitHubIcon/>}>GitHub</Button>
        <Button variant="outlined" href='https://www.linkedin.com/in/johnnyvantran/' startIcon={<LinkedInIcon/>}>LinkedIn</Button>
        <Button variant="outlined" href='https://www.instagram.com/johnnyjohnnytran/' startIcon={<InstagramIcon/>}>Instagram</Button>        
    </div>
  )
}