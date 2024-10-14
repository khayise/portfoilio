import React from 'react';

import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

interface Props {}

export const Contacts: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="mb-10 flex gap-x-5">
        <a target="blank" href="https://github.com/khayise" className="">
          <FaGithub className="contact-icon " size={'24px'} />
        </a>
        <a target="blank" href="https://www.linkedin.com/in/andrii-dedesh-50481827b/" className="">
          <FaLinkedinIn className="contact-icon " size={'24px'} />
        </a>
        <a target="blank" href="https://leetcode.com/u/user2504Jt/">
          <SiLeetcode className="contact-icon " size={'24px'} />
        </a>
      </div>
    </>
  );
};
