import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'


function NextButton({URI,Content}:{URI:string,Content:string}) {
    const [underline, setUnderline] = useState("");
  const handleMouseEnter = () => {
    setUnderline("underline");
  };

  const handleMouseLeave = () => {
    setUnderline("");
  };

  return (
    <Link href={URI} className="arrowDiv">
          <p
            className={`flex align-center ${underline} mt-3`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {Content}
            <Image
              src="/arrowWhite.png"
              alt="arrow"
              width={30}
              height={30}
              className="arrow"
            />
          </p>
        </Link>
  )
}

export default NextButton