import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../components/ui/Input';
import {Card, CardContent} from '../components/ui/Card';
import BottomNavigation from '../components/BottomNavigation';

const Home = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const categories = [
    {name: 'Electronics', icon: '📱', color: '#DBEAFE'},
    {name: 'Fashion', icon: '👗', color: '#FCE7F3'},
    {name: 'Home', icon: '🏠', color: '#D1FAE5'},
    {name: 'Sports', icon: '⚽', color: '#FED7AA'},
    {name: 'Books', icon: '📚', color: '#FEE2E2'},
    {name: 'Cars', icon: '🚗', color: '#FEF3C7'},
    {name: 'Beauty', icon: '💄', color: '#E9D5FF'},
    {name: 'Gaming', icon: '🎮', color: '#C7D2FE'},
  ];

  const products = [
    {
      id: 1,
      title: 'iPhone 14 Pro - Excellent Condition',
      price: '$899',
      location: 'New York, NY',
      seller: '@techseller_NY',
      time: '2h',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop',
    },
    {
      id: 2,
      title: 'MacBook Air M2 - Like New',
      price: '$1,200',
      location: 'Los Angeles, CA',
      seller: '@apple_reseller',
      time: '4h',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop',
    },
    // Add more products...
  ];

  const renderCategory = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('CategoryProducts' as never, {category: item.name.toLowerCase()})}>
      <View style={[styles.categoryIcon, {backgroundColor: item.color}]}>
        <Text style={styles.categoryEmoji}>{item.icon}</Text>
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderProduct = ({item}: {item: any}) => (
    <Card style={styles.productCard}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail' as never, {id: item.id})}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <CardContent>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
          <Text style={styles.productLocation}>{item.location}</Text>
          <View style={styles.productFooter}>
            <Text style={styles.productSeller}>{item.seller}</Text>
            <Text style={styles.productTime}>{item.time}</Text>
          </View>
          <View style={styles.productActions}>
            <TouchableOpacity
              onPress={() => {
                setLikedProducts(prev =>
                  prev.includes(item.id)
                    ? prev.filter(id => id !== item.id)
                    : [...prev, item.id]
                );
              }}>
              <Icon
                name="heart"
                size={16}
                color={likedProducts.includes(item.id) ? '#EF4444' : '#9CA3AF'}
                style={{
                  ...(likedProducts.includes(item.id) && {fill: '#EF4444'}),
                }}
              />
            </TouchableOpacity>
            <Text style={styles.likeCount}>24</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ShareSheet' as never)}>
              <Icon name="share" size={16} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </CardContent>
      </TouchableOpacity>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              style={styles.locationButton}
              onPress={() => navigation.navigate('Location' as never)}>
              <Icon name="map-pin" size={20} color="#8B5CF6" />
              <Text style={styles.locationText}>New York, NY</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications' as never)}>
              <Icon name="bell" size={24} color="#374151" />
            </TouchableOpacity>
          </View>

          <Text style={styles.greeting}>Hi sujatha! 👋</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Search' as never)}>
            <Input
              placeholder="Search products, sellers..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              leftIcon={<Icon name="search" size={20} color="#9CA3AF" />}
              editable={false}
              style={styles.searchInput}
            />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Categories' as never)}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={categories.slice(0, 4)}
            renderItem={renderCategory}
            keyExtractor={item => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Latest Products */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Latest Products</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Search' as never, {tab: 'products'})}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
    paddingBottom: 80,
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8B5CF6',
    marginLeft: 8,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  searchInput: {
    borderRadius: 24,
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  seeAllText: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: '500',
  },
  categoriesList: {
    gap: 16,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryEmoji: {
    fontSize: 24,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  productCard: {
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 8,
  },
  productLocation: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  productSeller: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8B5CF6',
  },
  productTime: {
    fontSize: 14,
    color: '#6B7280',
  },
  productActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  likeCount: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default Home;