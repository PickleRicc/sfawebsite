import Head from 'next/head';
import ScheduleLayout from '../components/ScheduleLayout';

export default function Schedule() {
  return (
    <>
      <Head>
        <title>Schedule Training | SpeedForce Athletics</title>
        <meta 
          name="description" 
          content="Schedule your speed and agility training session with SpeedForce Athletics in Lakeland, Florida." 
        />
      </Head>
      
      <ScheduleLayout>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Schedule Your Training
          </h1>
          <p className="text-lg text-textColor/80 max-w-2xl mx-auto">
            Choose your training program and schedule your session with our Olympic-level coach.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Subscription content will go here */}
        </div>
      </ScheduleLayout>
    </>
  );
}
