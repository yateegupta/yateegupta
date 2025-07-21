export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2019—Present",
    institution: "Fabiosys Innovations",
    degree: "Founder & CEO",
	
  },
  {
    year: "2013—2017",
    institution: "Indian Institute of Technology",
    degree: "B.Tech in Engineering Physics",
    thesis: "Fourier Ptychographic Imaging",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
