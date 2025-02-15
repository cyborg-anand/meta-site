import { motion } from 'framer-motion';
import { ArrowRight} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              We create innovative solutions that drive business growth
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 mx-auto">
              Get Started <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through our expertise and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Skilled professionals with years of experience',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c'
              },
              {
                title: 'Modern Technology',
                description: 'Using cutting-edge tools and frameworks',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous testing and quality control',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`${feature.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;