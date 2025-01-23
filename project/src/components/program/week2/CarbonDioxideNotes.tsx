import React from 'react';

export default function CarbonDioxideNotes() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Carbon Dioxide Notes</h2>
      
      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-medium text-red-900 mb-3">Problem</h3>
          <p className="text-red-800">
            There is only 0.03% carbon dioxide in the atmosphere today. Healthy human beings require about 5%
            carbon dioxide in the alveoli (which are little sacs where the exchange of carbon dioxide and oxygen
            take place) of the lungs. When we consistently overbreathe the amount of carbon dioxide in your
            body will fall below the optimal level, destabilising the body's chemistry.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium text-green-900 mb-3">What is carbon dioxide?</h3>
          <p className="text-green-800">
            Carbon dioxide is a natural gas that is produced within the body. With inhaling oxygen and exhaling
            carbon dioxide as the purpose of breathing it is easy to think of oxygen as the lifesaver and as CO₂ as
            just the by-product. However, as we learn more about carbon dioxide it's what paves the way for
            oxygen. Its purpose is to transmute oxygen into energy. After our cells use oxygen, they release CO₂,
            which gets carried by the blood to your lungs. Then, you breathe it out.
          </p>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg">
          <h3 className="font-medium text-amber-900 mb-3">Why is carbon dioxide important?</h3>
          <p className="text-amber-800">
            Carbon dioxide plays a crucial role in regulating the body's breathing. When CO₂ levels rise in the
            blood, it triggers the brain to signal the body to take deeper or faster breaths, helping maintain the
            balance between oxygen and carbon dioxide levels. This balance is essential for proper bodily
            function, as too much CO₂ can make you feel short of breath, dizzy, or fatigued, while too little can
            cause lightheadedness or muscle cramps.
          </p>
          <p className="text-amber-800 mt-2">
            Effective breathing, like through diaphragmatic breathwork, helps the body efficiently expel CO₂ and
            maintain this balance.
          </p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-medium text-purple-900 mb-3">The Right Balance</h3>
          <p className="text-purple-800">
            It's important to note that high levels of carbon dioxide in the blood can be intense and isn't
            necessary to restore the natural flow of breathing. We are simply looking to re-introduce a tolerable
            amount of 'air-hungry'.
          </p>
          <p className="text-purple-800 mt-2">
            Somewhere along the way, you learnt to be an over-breather, and so it's time to start unlearning.
            This means making a conscious effort to check in with your breathing multiple times throughout the
            day and become a student of your breath.
          </p>
        </div>
      </div>
    </section>
  );
}