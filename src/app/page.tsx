'use client'

import Navbar from '@/components/flame-x/Navbar'
import HeroSection from '@/components/flame-x/HeroSection'
import AboutSection from '@/components/flame-x/AboutSection'
import FeaturesSection from '@/components/flame-x/FeaturesSection'
import MultiTerrainSection from '@/components/flame-x/MultiTerrainSection'
import FireSuppressionSection from '@/components/flame-x/FireSuppressionSection'
import AICameraSection from '@/components/flame-x/AICameraSection'
import UltrasonicSection from '@/components/flame-x/UltrasonicSection'
import TemperatureSection from '@/components/flame-x/TemperatureSection'
import PowerSystemSection from '@/components/flame-x/PowerSystemSection'
import DataHubSection from '@/components/flame-x/DataHubSection'
import EmergencySection from '@/components/flame-x/EmergencySection'
import StatsSection from '@/components/flame-x/StatsSection'
import TechStackSection from '@/components/flame-x/TechStackSection'
import TimelineSection from '@/components/flame-x/TimelineSection'
import VisionSection from '@/components/flame-x/VisionSection'
import ChatBot from '@/components/flame-x/ChatBot'
import BackToTop from '@/components/flame-x/BackToTop'
import Footer from '@/components/flame-x/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <MultiTerrainSection />
        <FireSuppressionSection />
        <AICameraSection />
        <UltrasonicSection />
        <TemperatureSection />
        <PowerSystemSection />
        <DataHubSection />
        <EmergencySection />
        <StatsSection />
        <TechStackSection />
        <TimelineSection />
        <VisionSection />
      </main>
      <Footer />
      <ChatBot />
      <BackToTop />
    </div>
  )
}
