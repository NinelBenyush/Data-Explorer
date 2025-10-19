import pandas as pd 
import matplotlib.pyplot as plt
import seaborn as sns
#line charts, bar charts

uploaded_file = pd.read_csv('sample_data.csv')

df = uploaded_file[['Price', 'Product', 'Category', 'Quantity', 'Date']]

quantity_over_time = df.groupby('Date')['Quantity'].sum()

#total quantity sold over time
plt.figure(figsize=(10,5))
plt.plot(quantity_over_time.index, quantity_over_time.values, marker='o', color='green')
plt.title('Total Quantity Sold Over Time')
plt.xlabel('Date')
plt.ylabel('Quantity Sold')
plt.show()

#top 5 products by quantity sold
top_products = df.groupby('Product')['Quantity'].sum().sort_values(ascending=False).head(5)
top_products.plot(kind='bar', figsize=(8,5), color='purple')
plt.title('Top 5 Products by Quantity Sold')
plt.xlabel('Product')
plt.ylabel('Quantity Sold')
plt.show()

#total quantity by category
plt.figure(figsize=(6,4))
sns.barplot(x='Category', y='Quantity', data=df, estimator=sum)
plt.title('Total Quantity by Category')
plt.tight_layout()
plt.show()

plt.figure(figsize=(6,4))
sns.lineplot(x='Date', y='Price', data=df, marker='o')
plt.title("Price Trend Over Time")
plt.tight_layout()
plt.show()
