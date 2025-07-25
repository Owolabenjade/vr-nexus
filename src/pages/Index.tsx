import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Headphones, Palette, Gamepad2, Box, Star, TrendingUp, Shield, Zap } from 'lucide-react';
import heroImage from '@/assets/vr-hero.jpg';
import cyberpunkCity from '@/assets/cyberpunk-city.jpg';
import robotCharacter from '@/assets/robot-character.jpg';
import vrUiPack from '@/assets/vr-ui-pack.jpg';

const Index = () => {
  const featuredAssets = [
    {
      id: 1,
      title: "Cyberpunk City Environment",
      creator: "DigitalVisions",
      price: "12.5 ICP",
      image: cyberpunkCity,
      rating: 4.9,
      downloads: 2847,
      category: "Environment"
    },
    {
      id: 2,
      title: "Animated Robot Character",
      creator: "TechCreator",
      price: "8.2 ICP", 
      image: robotCharacter,
      rating: 4.8,
      downloads: 1923,
      category: "Character"
    },
    {
      id: 3,
      title: "VR Interface Elements Pack",
      creator: "UIExpert",
      price: "15.0 ICP",
      image: vrUiPack, 
      rating: 5.0,
      downloads: 3564,
      category: "UI/UX"
    }
  ];

  const categories = [
    { name: "Environments", icon: Box, count: "2,847 assets" },
    { name: "Characters", icon: Gamepad2, count: "1,923 assets" },
    { name: "Audio", icon: Headphones, count: "967 assets" },
    { name: "Textures", icon: Palette, count: "4,125 assets" }
  ];

  const stats = [
    { label: "Total Assets", value: "12,847", icon: Box },
    { label: "Creators", value: "3,247", icon: Star },
    { label: "Total Sales", value: "₿847K ICP", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-vr bg-clip-text text-transparent">
                ICP VR Nexus
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Marketplace</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Create</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Connect Wallet</Button>
              <Button variant="hero">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
        <img 
          src={heroImage} 
          alt="VR Marketplace"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-vr bg-clip-text text-transparent">
            The Future of VR
            <br />Asset Trading
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover, buy, and sell premium VR assets on the first fully decentralized marketplace. 
            True blockchain ownership, instant payments, and 97.5% creator revenue.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text"
                placeholder="Search VR environments, characters, audio..."
                className="w-full pl-12 pr-4 py-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2" size="default">
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="xl">
              Explore Marketplace
            </Button>
            <Button variant="outline" size="xl">
              Start Creating
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Browse by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-200 hover:shadow-vr">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{category.name}</h4>
                    <p className="text-muted-foreground text-sm">{category.count}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Assets */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold">Featured Assets</h3>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredAssets.map((asset) => (
              <div key={asset.id} className="group cursor-pointer">
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-200 hover:shadow-vr">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                    <img 
                      src={asset.image} 
                      alt={asset.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium">
                        {asset.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {asset.title}
                    </h4>
                    <p className="text-muted-foreground mb-4">by {asset.creator}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm">{asset.rating}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {asset.downloads.toLocaleString()} downloads
                        </div>
                      </div>
                      <div className="text-lg font-bold text-primary">{asset.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Why Choose ICP VR Nexus?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Blockchain Security</h4>
              <p className="text-muted-foreground">
                True ownership with blockchain verification. Your assets are yours forever.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-lg mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Instant Payments</h4>
              <p className="text-muted-foreground">
                Get paid instantly with ICP tokens. No waiting, no delays, no middlemen.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-vr rounded-lg mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Creator First</h4>
              <p className="text-muted-foreground">
                97.5% revenue goes to creators. The most creator-friendly marketplace in VR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-vr bg-clip-text text-transparent mb-4">
              ICP VR Nexus
            </h2>
            <p className="text-muted-foreground mb-8">
              The decentralized future of VR asset trading
            </p>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">About</a>
              <a href="#" className="hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;