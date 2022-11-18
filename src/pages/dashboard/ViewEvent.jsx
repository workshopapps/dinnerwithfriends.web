import React from 'react'
import arrow from '../../assets/icons/arrow-down.svg'
import inviteeImg1 from '../../assets/img/inviteeImg1.png'
import inviteeImg2 from '../../assets/img/inviteeImg2.png'
import inviteeImg3 from '../../assets/img/inviteeImg3.png'
import inviteeImg4 from '../../assets/img/inviteeImg4.png'

const ViewEvent = () => {

  const invitees = [
    {
        id: 1,
        image: inviteeImg1,
        position: '1st Invitee',
        name: 'Johnson Joshua',
        dateNdTime: 'Friday, 21 November 2022 - 4pm',
        status: 'Accepted'
    },
    {
        id: 2,
        image: inviteeImg2,
        position: '2nd Invitee',
        name: 'John Maklinscout',
        dateNdTime: 'Friday, 21 November 2022 - 4pm',
        status: 'Accepted'
    },
    {
        id: 3,
        image: inviteeImg3,
        position: '3rd Invitee',
        name: 'Felix Sydney',
        dateNdTime: 'Friday, 21 November 2022 - 4pm',
        status: 'Accepted'
    },
    {
        id: 4,
        image: inviteeImg4,
        position: '4th Invitee',
        name: 'Felicia Scout',
        dateNdTime: 'Friday, 21 November 2022 - 4pm',
        status: 'Accepted'
    },
    {
        id: 5,
        image: inviteeImg3,
        position: '5th Invitee',
        name: 'Johnson Joshua',
        dateNdTime: 'Friday, 21 November 2022 - 4pm',
        status: 'Accepted'
    },
    {
        id: 6,
        image: inviteeImg2,
        position: '6th Invitee',
        name: 'Felix Sydney',
        dateNdTime: 'Friday, 21 November 2022 - 4pm',
        status: 'Accepted'
    },
    {
        id: 7,
        image: inviteeImg1,
        position: '7th Invitee',
        name: 'Johnson Joshua',
        dateNdTime: 'Friday, 21 November 2022 - 4pm',
        status: 'Accepted'
    },
    {
        id: 8,
        image: inviteeImg4,
        position: '8th Invitee',
        name: 'Felicia Scout',
        dateNdTime: 'Friday, 21 November 2022 - 4pm',
        status: 'Accepted'
    },
]

  return (
    <div>
      <main>
        <section>
          <h1 className="text-blue-500">Team UEFA Champe</h1>
          <p>Guys! It's been long we have gathered, let's try to make time for champions league next Tuesday. If you know your Goat no qualify, no bring yourself here.</p>
        </section>
        <aside></aside>
        <section>
          <div>
          {
                invitees.map(invitee => (
                        <div 
                            key={invitee.id}
                            className=""
                        >
                            <div>
                              <div>
                                <img src={invitee.image} alt="" />
                                <div>
                                  <h4>{invitee.position}</h4>
                                  <p>{invitee.name}</p>
                                </div>
                              </div>
                              <img src={arrow} alt="" />
                            </div>
                        </div>
                ))
            }
          </div>
        </section>
      </main>
    </div>
  )
}

export default ViewEvent